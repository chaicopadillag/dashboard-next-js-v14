"use client"
import { useAppSelector } from '@/store'
import { FaCartArrowDown, FaCartPlus } from 'react-icons/fa'
import { SimpleWidget } from '..'


export const WidgetGrid = () => {

    const { count } = useAppSelector(state => state.counterState)

    return (
        <div className="flex flex-wrap gap-10 items-center justify-center">
            <SimpleWidget
                title={count + ''}
                icon={<FaCartPlus className='w-8 h-8' />}
                label='Productos'
                path='/dashboard/counter'
                subTitle='Productos agregados'
            />
        </div>
    )
}
