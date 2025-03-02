interface CardProps {
    title: string;
    content: string;
    imageUrl?: string;
}

function Card({ title, content, imageUrl }: CardProps) {
    return (
      <div>
        <div className="card" style={{ maxWidth: "300px", margin: "auto" }}>
          {imageUrl && (
            <div className="card-image">
              <figure className="image is-4by3">
                <img src={imageUrl} alt={title} />
              </figure>
            </div>
          )}
          <div className="card-content">
            <div className="media">
              <div className="media-content">
                <p className="title is-4">{title}</p>
              </div>
            </div>
            <div className="content">{content}</div>
          </div>
        </div>
      </div>
    );
}

export default Card;