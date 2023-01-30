type Tag = {
    IconUrl: string;
    Id: number;
    Name: string;
    Rank: number;
}

type props = {
    tag: Tag
}

export default function Tag({ tag }: props) {
    return (
        <>
            <div className='tag'>
                <div className="tag-container">
                    <div className="icon">
                        <img src={tag.IconUrl} />
                    </div>
                    <div className="title">
                        {tag.Name}
                    </div>
                </div>
            </div>
        </>
    )
}
