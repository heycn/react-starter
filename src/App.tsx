import { Icon } from '@/components/shared/icon'

export const App: React.FC = () => {
  return (
    <div className="bg-pink-200 text-lg underline p-8 w-96 mt-8 m-auto rounded-lg">
      Hello world!
      <Icon className="w-[1.2em] h-[1.2em] text-blue-500" icon="mdi-light:home" />
    </div>
  )
}
