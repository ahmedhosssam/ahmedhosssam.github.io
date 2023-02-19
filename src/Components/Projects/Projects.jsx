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
          title="Quora Plus"
          skills={['ReactJS', 'Javascript', 'Firebase', 'Sass']}
          repoUrl="https://github.com/ahmedhosssam/quora-clone"
          liveLink="https://qoura-94df1.web.app/"
        />
      </div>
    </div>
  );
};
export default Projects;
