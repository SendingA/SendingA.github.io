"""
Friends Map Management Script
-----------------------------
Run this script to quickly add new friends to your map.
It will automatically fetch coordinates from city name and update the YAML file.

Usage:
    python scripts/add_friend.py

Requirements:
    pip install geopy pyyaml
"""

import yaml
import os
from datetime import datetime

try:
    from geopy.geocoders import Nominatim
    HAS_GEOPY = True
except ImportError:
    HAS_GEOPY = False
    print("Warning: geopy not installed. Install with 'pip install geopy' for automatic coordinates.")

def get_coordinates(city, country):
    """Get latitude and longitude from city and country name."""
    if not HAS_GEOPY:
        lat = input(f"  Enter latitude for {city}, {country}: ")
        lng = input(f"  Enter longitude for {city}, {country}: ")
        return float(lat), float(lng)
    
    geolocator = Nominatim(user_agent="friends_map_manager")
    location = geolocator.geocode(f"{city}, {country}")
    
    if location:
        print(f"  Found: {location.address}")
        print(f"  Coordinates: {location.latitude}, {location.longitude}")
        confirm = input("  Use these coordinates? (Y/n): ").strip().lower()
        if confirm != 'n':
            return location.latitude, location.longitude
    
    print("  Could not find location automatically.")
    lat = input(f"  Enter latitude manually: ")
    lng = input(f"  Enter longitude manually: ")
    return float(lat), float(lng)

def load_friends_data(filepath):
    """Load existing friends data from YAML file."""
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            return yaml.safe_load(f) or {'friends': []}
    return {'friends': []}

def save_friends_data(filepath, data):
    """Save friends data to YAML file."""
    with open(filepath, 'w', encoding='utf-8') as f:
        yaml.dump(data, f, default_flow_style=False, allow_unicode=True, sort_keys=False)
    print(f"\n✅ Saved to {filepath}")

def add_friend():
    """Interactive function to add a new friend."""
    print("\n" + "="*50)
    print("🌍 Add New Friend to the Map")
    print("="*50 + "\n")
    
    # Get friend info
    name = input("Name: ").strip()
    affiliation = input("Affiliation (University/Company): ").strip()
    city = input("City: ").strip()
    country = input("Country: ").strip()
    website = input("Website (optional, press Enter to skip): ").strip()
    message = input("Message (optional, press Enter to skip): ").strip()
    
    print(f"\n🔍 Looking up coordinates for {city}, {country}...")
    lat, lng = get_coordinates(city, country)
    
    # Create friend entry
    friend = {
        'name': name,
        'affiliation': affiliation,
        'location': {
            'city': city,
            'country': country,
            'lat': lat,
            'lng': lng
        },
        'website': website if website else '',
        'message': message if message else '',
        'date_added': datetime.now().strftime('%Y-%m-%d'),
        'approved': True
    }
    
    # Show summary
    print("\n" + "-"*50)
    print("📋 Summary:")
    print(f"   Name: {name}")
    print(f"   Affiliation: {affiliation}")
    print(f"   Location: {city}, {country} ({lat}, {lng})")
    if website:
        print(f"   Website: {website}")
    if message:
        print(f"   Message: {message}")
    print("-"*50)
    
    confirm = input("\nAdd this friend? (Y/n): ").strip().lower()
    if confirm == 'n':
        print("❌ Cancelled.")
        return None
    
    return friend

def main():
    # Find the data file
    script_dir = os.path.dirname(os.path.abspath(__file__))
    repo_root = os.path.dirname(script_dir)
    friends_file = os.path.join(repo_root, 'data', 'friends.yaml')
    
    print(f"📁 Friends data file: {friends_file}")
    
    # Load existing data
    data = load_friends_data(friends_file)
    print(f"📊 Current friends count: {len(data.get('friends', []))}")
    
    while True:
        friend = add_friend()
        if friend:
            data['friends'].append(friend)
            save_friends_data(friends_file, data)
            print(f"🎉 {friend['name']} has been added!")
        
        another = input("\nAdd another friend? (y/N): ").strip().lower()
        if another != 'y':
            break
    
    print("\n" + "="*50)
    print("Done! Don't forget to commit and push your changes:")
    print("  git add data/friends.yaml")
    print("  git commit -m 'Add new friends'")
    print("  git push")
    print("="*50)

if __name__ == "__main__":
    main()
