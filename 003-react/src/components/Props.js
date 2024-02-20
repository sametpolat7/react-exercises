import PropTypes from 'prop-types';

function Props(props) {
    return (
        <>
            {/* component içinde props tanımlama, component fonksiyonunda kullanma */}
            <h1>
                {
                    props.isLoggedIn ? ` ${props.name} ${props.surName} (${props.age}). Welcome!` : `Guest. Please Log In!`
                }
            </h1> 
           

            {/*destructing yoluyla props kullanma
            <h1>
                {
                    isLoggedIn ? `Hello. ${name} ${surName} (${age})` : `Who are you?`
                }
            </h1>
            */}

            {/* Bu ifade de react bir hata verir. React, bir listede hangi öğelerin değiştiğini, eklendiğini veya kaldırıldığını belirlemek için anahtar prop'unu kullanır.
            React, sanal DOM ile gerçek DOM'u uzlaştırırken, yalnızca değişen öğeleri verimli bir şekilde güncellemek ve yeniden işlemek için anahtarları kullanır.
            Anahtarlar olmadan, React daha az verimli bir uzlaştırma stratejisine başvurabilir, bu da potansiyel olarak gereksiz yeniden oluşturmalara ve performansın düşmesine neden olabilir. */}
            <ul>
                {
                    props.friends.map((item, index) => {
                        return <li key={index}> {item.name}</li>
                    })
                }
            </ul>

            <ol>
                {
                    props.friends.map((item) => {
                        return <li key={item.id}>{item.name}</li>
                    })
                }
            </ol>
            <br/>
            <h2>
                {
                    props.address.title + " " + props.address.zip
                }
            </h2>

        </>
    )
}

Props.propTypes = {
    name: PropTypes.string,
    surName: PropTypes.string,
    age: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.bool
    ]),
    isLoggedIn: PropTypes.bool.isRequired,
    friends: PropTypes.array,
    address: PropTypes.shape({
        title: PropTypes.string,
        zip: PropTypes.number
    })
};

export default Props;
