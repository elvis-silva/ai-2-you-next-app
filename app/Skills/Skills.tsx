import RotatingSphere from "../RotatingSphere"
import { SkillsBody, SphereContainer } from "./style"

const Skills = () => {
  return (
    <SkillsBody id="skills">
      <SphereContainer>
        <RotatingSphere />
      </SphereContainer>
    </SkillsBody>
  )
}

export default Skills
