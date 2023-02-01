import { Promotion } from '../../../entities/Promotion';
import { useRouter } from 'next/router'

type props = {
    card: Promotion
}

export default function Card({ card }: props) {
    const router = useRouter()
    
    return (
        <>
            <div className='card' onClick={() => router.push(`campaign/${card.SeoName}/${card.Id}`)}>
                <div className="card-image">
                    <img src={card.ImageUrl} />
                    <div className="card-logo">
                        <img src={card.BrandIconUrl} />
                    </div>
                    <div className="card-due-date">
                        {card.RemainingText}
                    </div>
                </div>
                <div className="card-title" dangerouslySetInnerHTML={{__html: card.Title}} />
                <div className="card-info">
                    Daha Daha
                </div>
                <div className='card-background' />
            </div>
        </>
    )
}
