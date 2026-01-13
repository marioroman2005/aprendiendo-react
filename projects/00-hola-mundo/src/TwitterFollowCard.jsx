import './App.css'

export function TwitterFollowCard({ username, name, isFollowing }){
    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img 
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${username}`}
                    alt="avatar snapchat" />
                <div className='tw-followCard-div'>
                    <strong>{name}</strong>
                    <span className='tw-followCard-infoUsername'>@{username}</span>
                </div>
            </header>

            <aside>
                <button className='tw-followCard-button'>
                    Seguir
                </button>
            </aside>
        </article>
    )
}