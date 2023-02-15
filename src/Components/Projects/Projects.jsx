import ProjectItem from './ProjectItem';
import project1 from '../../assets/project1.png';
import project2 from '../../assets/project2.png';
import project3 from '../../assets/project3.png';

const Projects = () => {
  return (
    <div id="projects" className="projects-container">
      <h1>Projects</h1>
      <div className="projects">
        <ProjectItem
          img={project2}
          title="Football NFT Page"
          skills={['ReactJS', 'Javascript', 'Css']}
          repoUrl="https://github.com/ahmedhosssam/football-nft-store"
          liveLink="https://ahmedhosssam.github.io/football-nft-store/"
        />

        <ProjectItem
          img={project1}
          title="Bosnai Pricing Page"
          skills={['ReactJS', 'Javascript', 'Css']}
          repoUrl="https://github.com/ahmedhosssam/bosnai-pricing-page"
          liveLink="https://ahmedhosssam.github.io/bosnai-pricing-page/"
        />

        <ProjectItem
          img={project3}
          title="Personal Website"
          skills={['ReactJS', 'Javascript', 'Sass']}
          repoUrl="https://github.com/ahmedhosssam/ahmedhosssam.github.io"
          liveLink="https://ahmedhosssam.github.io/"
        />
      </div>
    </div>
  );
};
export default Projects;
