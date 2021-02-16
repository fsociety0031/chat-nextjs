export async function getStaticPaths() {
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
    return <>
    <div>Id product: {props.id}</div>
    </>
}

export default Products;