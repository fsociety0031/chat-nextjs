import { useRouter } from 'next/router';

function Products () {
    const router = useRouter();
    const id = router.query.id;

    return <div>Id product: {id}</div>
}

export default Products;