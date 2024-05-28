
const Fruit = (src, alt, fruitName, counter, clickOne, clickTwo) => {
    return (

        <article>

            <img src={src} alt={alt}/>
            <span><strong>{fruitName}</strong></span>
            <button type='button' disabled={{counter} === 0}
                    onClick={clickOne}>-
            </button>
            {counter}
            <button type='button' onClick={clickTwo}>+</button>


        </article>

    );
};

export default Fruit;