
interface ErrorMsgProps {
    error:string
}

export default function ErrorMsg({error}:ErrorMsgProps) {
  return (
    <div className='text-center text-red-600'>{error}</div>
  )
}
