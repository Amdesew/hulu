import dynamic from 'next/dynamic';

const Map = dynamic(() => import('@/app/components/Maps/page'), { ssr: false });

export default function Location(){
    return(
        <div>
            <title>Location</title>
            <div className=''>
            <Map/>
            </div>
        </div>
    )
}