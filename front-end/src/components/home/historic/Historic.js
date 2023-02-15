import NavBar from "../../navbar/Navbar"
import { useState } from "react"
import InfiniteScroll from 'react-infinite-scroller';
import Allmatchups from "../../utils/Allmatchups";

const Historic = () => {

    const matchups = Allmatchups();

    const [id, setId] = useState()
    const [isOpen, setIsOpen] = useState(false)

    function handleClick(_id) {
        if (isOpen === true && id === _id) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
            setId(_id)
        }
    }

    const [items, setItems] = useState(Object.entries(matchups).slice(0, 10));
    const [hasMore, setHasMore] = useState(true);
    const [loading, setLoading] = useState(false);


    const loadMore = () => {
        setLoading(true);
        setTimeout(() => {
          const nextItems = Object.entries(matchups).slice(items.length, items.length + 10);
          setItems([...items, ...nextItems]);
          setLoading(false);
          if (nextItems.length === 0) {
            setHasMore(false);
          }
        }, 1000);
      };

    return (
        <div className="historic">
            <h1>Historique des derniers match-ups</h1>
            <InfiniteScroll
                pageStart={0}
                loadMore={loadMore}
                hasMore={hasMore}
                loader={
                    loading && (
                        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                    )
                  }
            >
                <div className="historic__container">
                    {items.map(([key, value]) => {
                        return (
                            <div>
                                <div className={`historic__matchup ${value.win === true ? 'win' : 'loose'}`} key={key} onClick={() => handleClick(value._id)}>
                                    <img
                                        alt={value.myChamp}
                                        src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${value.myChamp}.png`}
                                    />
                                    <div className={`historic__matchup--hischamp ${value.winMatchup === true ? 'win' : 'loose'}`}>
                                        <img
                                            alt={value.hisChamp}
                                            src={`https://ddragon.leagueoflegends.com/cdn/12.22.1/img/champion/${value.hisChamp}.png`}
                                        />
                                    </div>
                                </div>
                                {id === value._id && isOpen === true && (
                                    <div className="historic__matchup--commentary">
                                        <div>
                                            <p>Difficulté :</p>
                                            <p>{value.difficulty}</p>
                                        </div>
                                        <div>
                                            <p>Commentaire :</p>
                                            <p>{value.commentary}</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )
                    })}
                </div>
            </InfiniteScroll>
            <NavBar />
        </div>
    )
}

export default Historic