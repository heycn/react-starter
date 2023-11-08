import { useTheme } from '@/hooks/use_theme'
import { useUserStore } from '@/stores/user_store'
import { Icon } from '@/components/shared/icon'

export const App: React.FC = () => {
  const { user, updateUser } = useUserStore()
  const { theme, toggleTheme } = useTheme()

  const onClickAge = () => {
    updateUser({ age: user.age + 1 })
  }

  return (
    <div className="bg-light border border-black text-lg p-8 w-96 m-auto
     dark:bg-dark dark:text-white dark:border-white"
    >
      <div className="underline">
        Hello world!
        <Icon
          className="dark:text-blue-500 w-[1.2em] h-[1.2em] text-gray-500"
          icon="bi:bag-heart-fill"
        />
        <button onClick={toggleTheme}>{theme}</button>
      </div>
      <div>
        User Age:
        {user.age}
      </div>
      <button onClick={onClickAge} className="border rounded-md px-2">age + 1</button>
    </div>
  )
}
