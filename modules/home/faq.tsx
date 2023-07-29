import { faqData } from "./home-data";

export default function Faq() {
  return (
    <section className="faq">
      <h2 className="faq-header">Faqs</h2>
      <div className="faq-cards-container">
        {faqData.map((data, index: number) => {
          return (
            <div className="faq-cards" key={index}>
              <span className="question">{data.question}</span>
              <span className="answer">{data.answer}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
