import "./styles.css";

const RepositoriesLayout = ({ repositories, userState }) => {
  return (
    <>
      <h1 className="repositories__title">
        Repositories ({userState.public_repos})
      </h1>
      {repositories.map(({ name, description, html_url }, index) => {
        return (
          <div key={index} className="repository">
            <a target="_blank" className="repository__link" href={html_url}>
              <div className="repository__name">{name}</div>
            </a>
            <div className="repository__description">{description}</div>
          </div>
        );
      })}
    </>
  );
};

export default RepositoriesLayout;
