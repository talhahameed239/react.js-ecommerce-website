import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom'
import PageHeader from '../components/PageHeader'
import Tags from "../shop/Tags"
import PopularPost from "../shop/PopularPost"

const socialList = [{ link: "#", iconName: "icofont-facebook", className: "facebook", },
{ link: "#", iconName: "icofont-twitter", className: "twitter", },
{ link: "#", iconName: "icofont-linkedin", className: "linkedin", },
{ link: "#", iconName: "icofont-instagram", className: "instagram", },
{ link: "#", iconName: "icofont-pinterest", className: "pinterest", },];

const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList)
    const { id } = useParams()
    // console.log(id)

    const result = blog.filter((b) => b.id === Number(id))
    // console.log(result[0])

    return (
        <div>
            <PageHeader title="Single Blog Page" curPage={"Blog / Blog Details"} />
            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">

                        {/* left side */}
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols 1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt='' className='w-100' />
                                                                </div>
                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">
                                                                            {
                                                                                item.metaList.map((val, i) => (
                                                                                    <li key={i}><i className={val.iconName}></i> {val.text}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. A,
                                                                        in maxime velit necessitatibus amet nam vero corporis cupiditate
                                                                        esse, voluptatem eligendi tenetur eaque eos quae delectus magnam quia nobis molestias ea
                                                                        sit! Dolores ipsa amet quam mollitia? Quibusdam, sit tempora! Vero illo neque facere iusto!
                                                                        Veritatis vero maiores, quo in voluptates doloremque beatae aperiam, atque esse possimus, ipsum est dicta?</p>
                                                                    <blockquote>
                                                                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos,
                                                                            quo. Adipisci a officia pariatur quos dolorum quidem quasi soluta,
                                                                            ad natus sit praesentium corrupti numquam modi animi. Tempora dolore, vitae
                                                                            eaque nulla blanditiis non sapiente.</p>
                                                                        <title>
                                                                            <a href='#'>... Malissa Hunter</a>
                                                                        </title>
                                                                    </blockquote>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Illum est doloremque repellat ea excepturi temporibus quae laboriosam
                                                                        modi repudiandae eveniet ipsam voluptates maxime praesentium, totam ipsa
                                                                        sapiente blanditiis sint, autem consequatur. Distinctio tempore culpa,
                                                                        repellendus cumque quidem rerum doloremque accusamus minus quaerat. Distinctio,
                                                                        quisquam rem! Quae tempora pariatur a assumenda expedita ipsam temporibus doloremque
                                                                        distinctio error. Quas delectus nisi beatae atque ad a eum non vero voluptatem, tenetur, odit maiores?
                                                                    </p>
                                                                    <img src='/src/assets/images/blog/single/01.jpg' alt='' />
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Illum est doloremque repellat ea excepturi temporibus quae laboriosam
                                                                        modi repudiandae eveniet ipsam voluptates maxime praesentium, totam ipsa
                                                                        sapiente blanditiis sint, autem consequatur. Distinctio tempore culpa,
                                                                        repellendus cumque quidem rerum doloremque accusamus minus quaerat. Distinctio,
                                                                        quisquam rem! Quae tempora pariatur a assumenda expedita ipsam temporibus doloremque
                                                                        distinctio error. Quas delectus nisi beatae atque ad a eum non vero voluptatem, tenetur, odit maiores?
                                                                    </p>
                                                                    <div className="video-thumb">
                                                                        <img src='/src/assets/images/blog/single/02.jpg' alt='' />
                                                                        <a href='https://www.youtube.com/' className='video-button popup' target='_blank'>
                                                                            <i className='icofont-ui-play'></i>
                                                                        </a>
                                                                    </div>
                                                                    <p>
                                                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                                        Illum est doloremque repellat ea excepturi temporibus quae laboriosam
                                                                        modi repudiandae eveniet ipsam voluptates maxime praesentium, totam ipsa
                                                                        sapiente blanditiis sint, autem consequatur. Distinctio tempore culpa,
                                                                        repellendus cumque quidem rerum doloremque accusamus minus quaerat. Distinctio,
                                                                        quisquam rem! Quae tempora pariatur a assumenda expedita ipsam temporibus doloremque
                                                                        distinctio error. Quas delectus nisi beatae atque ad a eum non vero voluptatem, tenetur, odit maiores?
                                                                    </p>
                                                                    <div className="tags-section">
                                                                        <ul className="tags lab-ul">
                                                                            <li>
                                                                                <a href='#'>Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href='#'>Bussiness</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href='#'>Personal</a>
                                                                            </li>
                                                                        </ul>
                                                                        <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((val, i) => (
                                                                                    <li key={i}>
                                                                                        <a href='# ' className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))}
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))}
                                                </div>
                                            </div>
                                            <div className="navigations-part">
                                                <div className="left">
                                                    <a href='#' className='prev'>
                                                        <i className="icofont-double-left"></i>Previous Blog
                                                    </a>
                                                    <a href='#' className='title'>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequuntur.
                                                    </a>
                                                </div>
                                                <div className="right">
                                                    <a href='#' className='prev'>
                                                        <i className="icofont-double-right"></i>Next Article
                                                    </a>
                                                    <a href='#' className='title'>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequuntur.
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>


                        {/* right side */}
                        <div className="col-lg-4 col-12">
                            <Tags />
                            <PopularPost />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog