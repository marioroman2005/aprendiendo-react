import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){
    return (
        <section className='App'>
            <TwitterFollowCard username="midudev" name="Miguel Angel Duran" isFollowing={false} />
            <TwitterFollowCard username="elonmusk" name="Elon Musk" isFollowing/> 
            <TwitterFollowCard username="marioroman_05" name="Mario Roman" isFollowing={false} />
        </section>
        
    )
}