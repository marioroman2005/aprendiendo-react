import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

export function App(){

    return (
        <section className='App'>
            <TwitterFollowCard 
                userName="midudev" isFollowing={false} >
                Miguel Angel Duran
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName="elonmusk" isFollowing > 
                Elon Musk
            </TwitterFollowCard>

            <TwitterFollowCard 
                userName="marioroman_05" isFollowing={false} >
                Mario Roman
            </TwitterFollowCard>

        </section>
        
    )
}