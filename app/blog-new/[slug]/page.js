import Navbar from "@/app/COMMON/Navbar";
import pageData from "../pageData";
import Footer from "@/app/COMMON/Footer";
import "./articledetail.css"

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
        <div className="MainBloggimg"><img src={article.image} alt={article.alt} width={600} height={350} /></div>
        <div className="article-content">
          <div className="article-contt">
            <div className="cta-Banner">
              <img src={article.banner} alt="" />
            </div>
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
                  article.content.paragraphs.map((p, i) => <p className="paratop1" key={"p" + i}>{p}</p>)}
                {/* Render subHeading */}
                {article.content?.subHeading && <h2 className="subhead1">{article.content.subHeading}</h2>}
                {/* Render subParagraph */}
                {article.content?.subParagraph && <p className="paratop1">{article.content.subParagraph}</p>}
                {/* Render smallHeading */}
                {article.content?.smallHeading && (
                  <h3 className="small-head1">{article.content.smallHeading}</h3>
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
                  <h3 className="small-head2">{article.content.smallHeading1}</h3>
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
                  <h3 className="small-head2">{article.content.smallHeading2}</h3>
                )}
                {article.content?.bulletPoints2 && (
                  <ul className="ul-3">
                    {article.content.bulletPoints2.map((bp, i) => (
                      <li key={"bp2" + i}>{bp}</li>
                    ))}
                  </ul>
                )}
                {/* Render paragraph1 */}
                {article.content?.paragraph1 && <p className="paratop1">{article.content.paragraph1}</p>}
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
               {article.content?.subHeading1 && <h4 className="subhead3">{article.content.subHeading1}</h4>}
              </div>
            </div>

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
