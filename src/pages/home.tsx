import { useTranslation } from 'react-i18next'
import { useTheme } from '@/hooks/use_theme'
import { useUserStore } from '@/stores/user_store'
import { Icon } from '@/components/shared/icon'

export const Home: React.FC = () => {
  const { user, updateUser } = useUserStore()
  const { theme, toggleTheme } = useTheme()
  const { t, i18n } = useTranslation()

  const onClickAge = () => {
    updateUser({ age: user.age + 1 })
  }

  const switchLanguage = () => {
    const list = [
      'en',
      'zh-Hans',
      'zh-Hant',
      'ja',
      'ko',
    ]
    i18n.changeLanguage(
      list[(list.indexOf(i18n.language) + 1) % list.length],
    )
  }

  return (
    <>
      <div className="p-10 text-center">
        <div className="underline text-lg">
          {t('hello')}
        </div>
        <div>
          User Age:
          {user.age}
        </div>
        <button onClick={onClickAge} className="border rounded-md px-2">age + 1</button>
        <div className="flex justify-center gap-4">
          <button onClick={toggleTheme}>
            {theme === 'dark'
              ? <Icon className="text-[#ffffff80] w-[1.2em] h-[1.2em]" icon="material-symbols:dark-mode-outline" />
              : <Icon className="text-[#00000080] w-[1.2em] h-[1.2em]" icon="material-symbols:light-mode-outline" />}
          </button>
          <button onClick={switchLanguage}>
            <Icon className="text-[#00000080] dark:text-[#ffffff80] w-[1.2em] h-[1.2em]" icon="carbon:language" />
          </button>
        </div>
      </div>
    </>
  )
}
