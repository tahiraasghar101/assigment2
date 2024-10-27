import Link from 'next/link';


export default function App(){
  return(
    <>
    <div className='bg-blue-800 p-7 text-center text-3xl text-white font-bold h-25'>
     <Link href="/">Home</Link>  |
     <Link href="/about">About</Link>  |
           <Link href="/contact">Contact</Link>   |
           <Link href="/feedback">Feedback</Link>  |
           <Link href="/country">Country</Link>  |

    </div>
    </>
  )
}