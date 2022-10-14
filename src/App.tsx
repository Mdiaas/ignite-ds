import { Envelope, Lock } from 'phosphor-react';
import { Heading } from './components/Heading';
import { Text } from './components/Text';
import { TextInput } from './components/TextInput';
import { Checkbox } from './components/Checkbox';
import './styles/global.css';
import { Button } from './components/Button';
export function App() {
  
  return (
    <div className='w-screen h-screen bg-gray-900 flex items-center flex-col justify-center text-gray-100'>
      <header className='flex flex-col items-center'>
        <Heading size='lg'className='mt-4'>Ignite lab</Heading>

        <Text size="lg" className='text-gray-400'>Faça login e comece a usar</Text>
      </header>
      <form className='flex flex-col items-stretch w-full max-w-sm mt-10 gap-4'>
          <label htmlFor="email" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Endereço de e-mail</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Envelope />
              </TextInput.Icon >
              <TextInput.Input id='email' type='email' placeholder='Digite seu e-mail' />
            </TextInput.Root>
          </label>
          
          <label htmlFor="password" className='flex flex-col gap-3'>
            <Text className='font-semibold'>Senha</Text>
            <TextInput.Root>
              <TextInput.Icon>
                <Lock />
              </TextInput.Icon >
              <TextInput.Input id='password' type='password' placeholder='*******'  />
            </TextInput.Root>
          </label>
          
          <label htmlFor="remember" className="flex items-center gap-2">
            <Checkbox id='remember'/>
            <Text size="sm" className='text-gray-200'>Lembrar de mim por 30 dias</Text>
          </label>

          <Button type='submit' className='mt-4'>Acessar plataforma</Button>
      </form>

      <footer className='flex flex-col items-center gap-4 mt-8'>
        <Text asChild size='sm'>
          <a className='text-gray-400 underline hover:text-gray-200 hover:cursor-pointer'>Esqueceu a senha?</a>
        </Text>
        <Text asChild size='sm'>
          <a className='text-gray-400 underline hover:text-gray-200 hover:cursor-pointer'>Não possuí uma conta? Cadastre-se agora</a>
        </Text>
      </footer>
    </div>
  )
}

