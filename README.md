# 好用的 React 启动项目

这是我从零开始搭建的一个 React 项目，包含了

## 使用到的技术

- React
- Vite
- TypeScript
- zustand
- TailwindCSS
- Iconify
- React Router
- i18next

## 一些技巧

### 使用 Icon

```tsx
import { Icon } from '@iconify/react'
<Icon className="dark:text-blue-500 w-[1.2em] h-[1.2em] text-gray-500" icon="mdi-light:home" />
```
其中 icon 的名字你可以去 https://icones.js.org/ 搜索，然后复制你喜欢的 icon 的名称填入 icon 属性即可。

### 在组件外切换路由

```tsx
import { router } from '@/router/router'
router.navigate('/home')
```

### 主题切换

使用 `toggleTheme` 自动切换主题

```tsx
import { useTheme } from '@/hooks/use_theme'

export const App: React.FC = () => {
  const { toggleTheme } = useTheme()
  return (
    <>
      <button onClick={toggleTheme}>toggleTheme</button>
    </>
  )
}
```