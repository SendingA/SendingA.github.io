---
title: 使用 Jupyter Notebook 写博客！
date: '2023-11-04'
summary: 轻松将 Jupyter Notebook 发布为博客！
---
```python
from IPython.core.display import Image
Image('https://www.python.org/static/community_logos/python-logo-master-v3-TM-flattened.png')
```

    
![png](output_1_0.png)
    

```python
print("Welcome to Academic!")
```

    Welcome to Academic!

## 整理你的 Notebook

将要发布的 Notebook 放入网站根目录下的 `notebooks` 文件夹。

## 将 Notebook 导入网站

```bash
pipx install academic
academic import 'notebooks/**.ipynb' content/post/ --verbose
```

Notebook 将发布到上面指定的文件夹中。在本例中，它们会发布到 `content/post/` 文件夹。
