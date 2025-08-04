import Navbar from "@/app/COMMON/Navbar";
import pageData from "../pageData";
import Footer from "@/app/COMMON/Footer";
import "./articledetail.css";

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
              <div className="cta-Banner">
              <img src={article.banner} alt="" />
            </div>
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
                  {(article.content?.image1) && article.content.image1[1] && (
                    <img
                      src={article.content.image1[1]}
                      alt="article extra"
                      style={{ maxWidth: "100%", marginTop: 16 }}
                    />
                  )}

                   {article.content?.subHeading2 && (
                  <h4 className="small-head3">{article.content.subHeading2}</h4>
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
                    {article.content.bulletPoints3.map((bp, i) => (
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
                  {(article.content?.image1) && article.content.image1[2] && (
                    <img
                      src={article.content.image1[2]}
                      alt="article extra"
                      style={{ maxWidth: "100%", marginTop: 16 }}
                    />
                  )}


                    {article.content?.subHeading3 && (
                  <h4 className="small-head3">{article.content.subHeading3}</h4>
                )}
                 {article.content?.subParagraph3 && (
                 <> <p className="paratop1">{article.content.subParagraph3[0]}</p>
                  <p className="paratop1">{article.content.subParagraph3[1]}</p>
                  <p className="paratop1">{article.content.subParagraph3[2]}</p></>
                )}
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
