const ResourceCategory = ({ data }) => {
  return (
    <>
      <div class="row pt-10 wrapper">
        {data?.map((data, index) => (
          <a
            class="nol x-4 col-sm-12  pod-content"
            href={`/resources/${data.url}`}
          >
            <div className="image-container">
              <span class="green-overlay"></span>
              <img
                className="w-100"
                src={data.FeaturedImage}
                alt={data.title}
              />
            </div>
            <h3 class="title ">{data.title}</h3>
            <p class="podcast-desc">
              <div>{data.Category}</div>
            </p>
          </a>
        ))}
      </div>
    </>
  );
};

export default ResourceCategory;
