export async function getStaticPaths() {
    await delay(5000)
    return {
        paths: [{
            params: {
                id: '1'
            },
            params: {
                id: '2'
            },
            params: {
                id: '3'
            }
        }],
        fallback: 'blocking'
    }
}

export async function getStaticProps(context) {
    const id = context.params.id;

    return {
        props: {
            id: id
        }
    }
}

function Products(props) {
    return <div>Id product: {props.id}</div>
}

export default Products;

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}