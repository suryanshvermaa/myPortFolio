import React from "react";
import styles from "./projectCard.module.css";

function ProjectCard({ project }) {
  return (
    <div className={styles.box}>
      <img src={project.imgUrl} alt="image" className={styles.imgStyle} />
      <p style={{ color: "cyan" }}>{project.name}</p>
      <p
        style={{
          color: "gray",
          fontWeight: "lighter",
          lineHeight: "22px",
          fontSize: "13px",
        }}
      >
        {project.description}
      </p>
      <p>
        <span style={{ color: "cyan", fontSize: "13px" }}>Tech Stack:</span>
        <br />{" "}
        <pre style={{ color: "gray", fontSize: "13px" }}>
          {" "}
          frontend:{project.frontend.join(",")}
        </pre>
        <pre style={{ color: "gray", fontSize: "13px" }}>
          {" "}
          backend:{project.backend.join(",").slice(0, 26)} <br />{" "}
          {project.backend.join(",").slice(26, 51)} <br />{" "}
          {project.backend.join(",").slice(51, -1)}
        </pre>
        <button
          style={{
            padding: "10px",
            borderRadius: "10px",
            backgroundColor: "cyan",
          }}
        >
          <a
            href={project.gitUrl}
            style={{
              fontSize: "13px",
              backgroundColor: "transparent",
              color: "black",
              fontWeight: "bold",
            }}
          >
            Github Link
          </a>
        </button>
      </p>
    </div>
  );
}

export default ProjectCard;
