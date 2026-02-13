@echo off
echo ================================
echo  Friends Map Quick Add Tool
echo ================================
echo.

REM Check if Python is available
python --version >nul 2>&1
if errorlevel 1 (
    echo Error: Python is not installed or not in PATH
    echo Please install Python from https://python.org
    pause
    exit /b 1
)

REM Check and install dependencies
echo Checking dependencies...
pip show geopy >nul 2>&1
if errorlevel 1 (
    echo Installing geopy for automatic coordinates lookup...
    pip install geopy pyyaml
)

echo.
echo Starting friend management script...
echo.

REM Run the Python script
python "%~dp0add_friend.py"

echo.
echo ================================
echo Push changes to GitHub? (This will trigger auto-deploy)
echo ================================
set /p confirm="Push now? (Y/n): "

if /i "%confirm%"=="n" (
    echo Skipped. Remember to push manually later.
) else (
    cd /d "%~dp0.."
    git add data/friends.yaml
    git commit -m "Add new friend to map"
    git push
    echo.
    echo ✅ Pushed! Site will auto-deploy in ~2 minutes.
)

pause
