import testimonialData from "../utils/testimonialData";

const Testimonial = () => {
  return (
    <div className="flex">
      {testimonialData.map((i, index) => (
        <div key={index} className="p-8 border-2 rounded-xl m-4">
          <h1>{i.name}</h1>
          <h2>{i.quote}</h2>
          <h3>{i.kaam}</h3>
        </div>
      ))}
    </div>
  );
};

export default Testimonial;
