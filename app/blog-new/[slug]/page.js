import Navbar from "@/app/COMMON/Navbar";
import pageData from "../pageData";
import Footer from "@/app/COMMON/Footer";
import "./articledetail.css";
import Article from "../Article/Article";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import Link from "next/link";

export default function ArticleDetail({ params }) {
  const { slug } = params;
  // Find the article by slug
  const article = pageData.find(
    (item) =>
      item.head
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-") === slug
  );

  if (!article) {
    return <div>Article not found.</div>;
  }

  return (
    <>
      <Navbar />
      <section className="article-detail">
        <h1>{article.title}</h1>
        {/* <div className="article-date">{article.date}</div> */}
        <div className="MainBloggimg">
          <img src={article.image} alt={article.alt} width={600} height={350} />
        </div>
        <div className="article-content">
          <div className="article-contt">
            <div className="contt-sec">
             
              <div className="blog-by">
                <div className="profileDate">
                  <div className="pd-n">
                    <p>{article.author.name}</p>
                    <p>{article.date}</p>

                    <p>{article.author.designation}</p>
                  </div>
                </div>
              </div>
              <div className="main-contt-sec">
                {/* Render paragraphs */}
                {article.content?.paragraphs &&
                  article.content.paragraphs.map((p, i) => (
                    <p className="paratop1" key={"p" + i}>
                      {p}
                    </p>
                  ))}
                {/* Render subHeading */}
                {article.content?.subHeading && (
                  <h2 className="subhead1">{article.content.subHeading}</h2>
                )}
                {/* Render subParagraph */}
                {article.content?.subParagraph && (
                  <p className="paratop1">{article.content.subParagraph}</p>
                )}
                {/* Render smallHeading */}
                {article.content?.smallHeading && (
                  <h3 className="small-head1">
                    {article.content.smallHeading}
                  </h3>
                )}
                {/* Render bulletPoints */}
                {article.content?.bulletPoints && (
                  <ul className="ul-1">
                    {article.content.bulletPoints.map((bp, i) => (
                      <li key={"bp" + i}>{bp}</li>
                    ))}
                  </ul>
                )}
                {/* Render smallHeading1 and bulletPoints1 */}
                {article.content?.smallHeading1 && (
                  <h3 className="small-head2">
                    {article.content.smallHeading1}
                  </h3>
                )}
                {article.content?.bulletPoints1 && (
                  <ul className="ul-2">
                    {article.content.bulletPoints1.map((bp, i) => (
                      <li key={"bp1" + i}>{bp}</li>
                    ))}
                  </ul>
                )}
                {/* Render smallHeading2 and bulletPoints2 */}
                {article.content?.smallHeading2 && (
                  <h3 className="small-head2">
                    {article.content.smallHeading2}
                  </h3>
                )}
                {article.content?.bulletPoints2 && (
                  <ul className="ul-3">
                    {article.content.bulletPoints2.map((bp, i) => (
                      <li key={"bp2" + i}>{bp}</li>
                    ))}
                  </ul>
                )}
                {/* Render para0 */}
                {article.content?.para0 && (
                  <p className="paratop1">{article.content.para0}</p>
                )}
                {/* Render paragraph1 */}
                {article.content?.paragraph1 && (
                  <p className="paratop1">{article.content.paragraph1}</p>
                )}

                {/* Render image1 if present */}
                <div className="more-img">
                  {article.content?.image1 && (
                    <img
                      src={article.content.image1[0]}
                      alt="article extra"
                      style={{ maxWidth: "100%", marginTop: 16 }}
                    />
                  )}
                </div>
                {article.content?.subHeading1 && (
                  <h4 className="small-head3">{article.content.subHeading1}</h4>
                )}
                {article.content?.subParagraph1 && (
                  <p className="paratop1">{article.content.subParagraph1}</p>
                )}
                {/* Render smallHeading3 and bulletPoints3 */}
                {article.content?.smallHeading3 && (
                  <h3 className="small-head2">
                    {article.content.smallHeading3}
                  </h3>
                )}
                {article.content?.bulletPoints3 && (
                  <ul className="ul-3">
                    {article.content.bulletPoints3.map((bp, i) => (
                      <li key={"bp2" + i}>{bp}</li>
                    ))}
                  </ul>
                )}

                {article.content?.paragraph1 && (
                  <p className="paratop1">{article.content.paragraph1}</p>
                )}

                {article.content.table1 &&
                  article.content.table1.columns &&
                  article.content.table1.rows && (
                    <div className="table-container">
                      <table className="custom-table">
                        <thead>
                          <tr>
                            {article.content.table1.columns.map((col, i) => (
                              <th key={i}>{col}</th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {article.content.table1.rows.map((row, i) => (
                            <tr key={i}>
                              {row.map((cell, j) => (
                                <td key={j}>{cell}</td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                <div className="more-img">
                  {article.content?.image1 && article.content.image1[1] && (
                    <img
                      src={article.content.image1[1]}
                      alt="article extra"
                      style={{ maxWidth: "100%", marginTop: 16 }}
                    />
                  )}

                  {article.content?.subHeading2 && (
                    <h4 className="small-head3">
                      {article.content.subHeading2}
                    </h4>
                  )}
                  {article.content?.subParagraph2 && (
                    <p className="paratop1">{article.content.subParagraph2}</p>
                  )}

                  {/* Render smallHeading4 and bulletPoints4 */}
                  {article.content?.smallHeading4 && (
                    <h3 className="small-head2">
                      {article.content.smallHeading4}
                    </h3>
                  )}
                  {article.content?.bulletPoints4 && (
                    <ul className="ul-3">
                      {article.content.bulletPoints4.map((bp, i) => (
                        <li key={"bp2" + i}>{bp}</li>
                      ))}
                    </ul>
                  )}
                  {article.content?.smallHeading5 && (
                    <h3 className="small-head2">
                      {article.content.smallHeading5}
                    </h3>
                  )}
                  {article.content?.bulletPoints5 && (
                    <ul className="ul-3">
                      {article.content.bulletPoints5.map((bp, i) => (
                        <li key={"bp2" + i}>{bp}</li>
                      ))}
                    </ul>
                  )}
                  {article.content?.smallHeading6 && (
                    <h3 className="small-head2">
                      {article.content.smallHeading6}
                    </h3>
                  )}
                  {article.content?.bulletPoints6 && (
                    <ul className="ul-3">
                      {article.content.bulletPoints6.map((bp, i) => (
                        <li key={"bp2" + i}>{bp}</li>
                      ))}
                    </ul>
                  )}
                  {article.content?.smallHeading7 && (
                    <h3 className="small-head2">
                      {article.content.smallHeading7}
                    </h3>
                  )}
                  {article.content?.bulletPoints7 && (
                    <ul className="ul-3">
                      {article.content.bulletPoints7.map((bp, i) => (
                        <li key={"bp2" + i}>{bp}</li>
                      ))}
                    </ul>
                  )}
                  {article.content?.paragraph2 && (
                    <p className="paratop1">{article.content.paragraph2}</p>
                  )}

                  {article.content.table2 &&
                    article.content.table2.columns &&
                    article.content.table2.rows && (
                      <div className="table-container">
                        <table className="custom-table">
                          <thead>
                            <tr>
                              {article.content.table2.columns.map((col, i) => (
                                <th key={i}>{col}</th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {article.content.table2.rows.map((row, i) => (
                              <tr key={i}>
                                {row.map((cell, j) => (
                                  <td key={j}>{cell}</td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}

                  {/* Render image1 if present */}
                  <div className="more-img">
                    {article.content?.image1 && article.content.image1[2] && (
                      <img
                        src={article.content.image1[2]}
                        alt="article extra"
                        style={{ maxWidth: "100%", marginTop: 16 }}
                      />
                    )}

                    {article.content?.subHeading3 && (
                      <h4 className="small-head3">
                        {article.content.subHeading3}
                      </h4>
                    )}
                    {article.content?.subParagraph3 && (
                      <>
                        {" "}
                        <p className="paratop1">
                          {article.content.subParagraph3[0]}
                        </p>
                        {/* <p className="paratop1">
                          {article.content.subParagraph3[1]}
                        </p>
                        <p className="paratop1">
                          {article.content.subParagraph3[2]}
                        </p> */}
                      </>
                    )}

                    {article.content?.smallHeading8 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading8}
                      </h3>
                    )}
                    {article.content?.bulletPoints8 && (
                      <ul className="ul-3">
                        {article.content.bulletPoints8.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}
                    {article.content?.subHeading4 && (
                      <h4 className="small-head3">
                        {article.content.subHeading4}
                      </h4>
                    )}
                    {article.content?.subParagraph4 && (
                      <p className="paratop1">
                        {article.content.subParagraph4}
                      </p>
                    )}

                    {article.content?.smallHeading9 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading9}
                      </h3>
                    )}
                    {article.content?.bulletPoints9 && (
                      <ul className="ul-3">
                        {article.content.bulletPoints9.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}
                    {article.content?.subHeading5 && (
                      <h4 className="small-head3">
                        {article.content.subHeading5}
                      </h4>
                    )}
                    {article.content?.subParagraph5 && (
                      <p className="paratop1">
                        {article.content.subParagraph5}
                      </p>
                    )}
                    {article.content?.smallHeading10 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading10}
                      </h3>
                    )}
                    {article.content?.bulletPoints10 && (
                      <ul className="ul-3">
                        {article.content.bulletPoints10.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}
                    {article.content?.subHeading6 && (
                      <h4 className="small-head3">
                        {article.content.subHeading6}
                      </h4>
                    )}
                    {article.content?.subParagraph6 && (
                      <p className="paratop1">
                        {article.content.subParagraph6}
                      </p>
                    )}
                    {article.content?.smallHeading11 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading11}
                      </h3>
                    )}
                    {article.content?.bulletPoints11 && (
                      <ul className="ul-3">
                        {article.content.bulletPoints11.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}
                    {article.content?.smallHeading12 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading12}
                      </h3>
                    )}
                    {article.content?.bulletPoints12 && (
                      <ul className="ul-3">
                        {article.content.bulletPoints12.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}
                    {article.content?.smallHeading13 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading13}
                      </h3>
                    )}
                    {article.content?.bulletPoints13 && (
                      <ul className="ul-3">
                        {article.content.bulletPoints13.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}
                    {article.content?.smallHeading14 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading14}
                      </h3>
                    )}
                    {article.content?.bulletPoints14 && (
                      <ul className="ul-3">
                        {article.content.bulletPoints14.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}

                    {article.content?.map && article.content.map && (
                      <img
                        src={article.content.map}
                        alt="article extra"
                        style={{ maxWidth: "100%", marginTop: 16 }}
                      />
                    )}
                    {article.content?.subHeading7 && (
                      <h4 className="small-head3">
                        {article.content.subHeading7}
                      </h4>
                    )}
                    {article.content?.subParagraph7 && (
                      <p className="paratop1">
                        {article.content.subParagraph7}
                      </p>
                    )}
                    {article.content?.smallHeading15 && (
                      <h3 className="small-head2">
                        {article.content.smallHeading15}
                      </h3>
                    )}
                    {article.content?.bulletPoints15 && (
                      <ul className="ul-3">
                        {article.content.bulletPoints15.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}

                    {article.content?.subHeading8 && (
                      <h4 className="small-head3">
                        {article.content.subHeading8}
                      </h4>
                    )}
                    {article.content?.subParagraph8 && (
                      <>
                        <p className="paratop1">
                          {article.content.subParagraph8[0]}
                        </p>
                      </>
                    )}
                    {article.content?.bulletPoints16 && (
                      <ul className="ul-3">
                        {article.content.bulletPoints16.map((bp, i) => (
                          <li key={"bp2" + i}>{bp}</li>
                        ))}
                      </ul>
                    )}
                    {article.content?.paragraph4 && (
                      <p className="paratop1">
                        {" "}
                        <strong>{article.content.paragraph4[0]}</strong>
                        {article.content.paragraph4[1]}
                      </p>
                    )}
                    {article.content?.subHeading9 && (
                      <h4 className="small-head3">
                        {article.content.subHeading9}
                      </h4>
                    )}
                    {article.content?.subParagraph9 && (
                      <>
                        <p className="paratop1">
                          {article.content.subParagraph9[0]}
                        </p>
                        <p className="paratop1">
                          {article.content.subParagraph9[1]}
                        </p>
                      </>
                    )}
                    {
                      <div className="bott-icon">
                        <h6> <strong>{article.author.name}</strong> </h6>
                        <div style={{ display: "flex", gap: "10px" }}>
                          <Link className="icon-f"
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaFacebookF size={20} />
                          </Link>
                          <Link className="icon-f"
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaLinkedinIn size={20} />
                          </Link>
                          <Link className="icon-f"
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <FaTwitter size={20} />
                          </Link>
                        </div>
                      </div>
                    }
                  </div>
                </div>
             
         
         
         
                 </div>
                  <div className="cta-Banner">
                <img src={article.banner} alt="" />
              </div>  
            </div>
          </div>
        </div>
      </section>
      <Article title={"More in Culture"} />
      <Footer />
    </>
  );
}
