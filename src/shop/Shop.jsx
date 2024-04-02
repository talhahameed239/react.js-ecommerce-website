import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import Data from "../products.json"
import ProductCard from './ProductCard'
import Pagination from '../components/Pagination'
import Search from './Search'
import { ShopCategories } from './ShopCategories'
import PopularPost from './PopularPost'
import Tags from './Tags'


const showResults = "Showing 1 - 12 of 139 Results"


const Shop = () => {

    const [gridList, setGridList] = useState(true)
    const [products, setProducts] = useState(Data)

    //pagination
    const [currentPage, setCurrentPage] = useState(1)
    const productsPerPage = 12

    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct)

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    //filter products
    const [selectedCategory, setSelectedCategory] = useState('All')
    const menuItems = [...new Set(Data.map((val) => val.category))]

    const filterItem = (curcat) => {
        const newItem = Data.filter((newVal) => {
            return newVal.category == curcat
        })
        setSelectedCategory(curcat)
        setProducts(newItem)
    }








    return (
        <div>
            <PageHeader title="Our Shop" curPage="Shop" />
            <div className="shop-page padding-tb">
                <div className="container">
                    <div className="row justify-content-center">

                        {/* left side */}
                        <div className="col-lg-8 col-12">
                            <article>
                                {/* layout and title */}
                                <div className="shop-title d-flex flex-wrap justify-content-between">
                                    <p>{showResults}</p>
                                    <div className={`product-view-mode ${gridList ? "gridActive" : "listActive"}`}>
                                        <a className='grid' onClick={() => setGridList(!gridList)}>
                                            <i className="icofont-ghost"></i>
                                        </a>
                                        <a className='list' onClick={() => setGridList(!gridList)}>
                                            <i className="icofont-listine-dots"></i>
                                        </a>
                                    </div>
                                </div>

                                <div>
                                    <ProductCard gridList={gridList} products={currentProducts} />
                                </div>

                                <Pagination
                                    productsPerPage={productsPerPage}
                                    totalProducts={products.length}
                                    paginate={paginate}
                                    activePage={currentPage}
                                />
                            </article>
                        </div>


                        {/* right side */}
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Search products={products} gridList={gridList} />
                                <ShopCategories
                                    filterItem={filterItem}
                                    setItem={setProducts}
                                    menuItems={menuItems}
                                    setProducts={setProducts}
                                    selectedCategory={selectedCategory}
                                />
                                <PopularPost />
                                <Tags />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shop