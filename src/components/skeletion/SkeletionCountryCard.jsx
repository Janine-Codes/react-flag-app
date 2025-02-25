import Skeleton from "react-loading-skeleton";

const SkeletonCountryCard = () => {
  return (
    <div className="country-card-container">
      <Skeleton
        height={150}
        style={{ lineHeight: "25px", cornerRadius: "0 0 4px 4px" }}
      />
      <div className="country-text-container">
        <h3>
          <Skeleton width={`100%`} />
        </h3>
        <p>
          Capital:
          <Skeleton width={`50%`} />
        </p>
        <p>
          Region:
          <Skeleton width={`50%`} />
        </p>
        <p>
          Population:
          <Skeleton width={`33%`} />
        </p>
      </div>
    </div>
  );
};

export default SkeletonCountryCard;
