import { useEffect } from "react"

function RotatingSphere(props: any) {
  let tagClouds: any;

  useEffect(() => {
    import("./TagCloud").then((response) => {
      const tagCloud = response.default
      tagCloud(
        ".tagcloud-container",
        [
          "Java",
          "Typescript",
          "Javascript",
          "NodeJS",
          "MySQL",
          "React",
          "HTML",
          "CSS",
          "Git",
          "GitHub",
          "Linux",
          "Windows",
          "POO",
          "Dados",
          "Algoritmos",
          "MongoDB",
          "Android",
          "AI Generative",
          "LLM",
          "ChatGPT",
          "Gemini",
          "LLAMA",
          "Google",
          "AWS",
          "Python",
          "Machine Learning",
          "Deep Learning",
          "Lógica",
          "Programação",
        ],
        {
          // eslint-disable-next-line no-restricted-globals
          radius: screen.width < 900 ? 150 : 300,
          maxSpeed: "fast",
          initSpeed: "normal",
          useContainerInlineStyles: true,
          sectionContainer: "skills",
          styles: { color: "#65d865" },
        }
      )
    })
    return () => {
      tagClouds = document.getElementsByClassName("tagcloud")
      setTimeout(() => {
        if(tagClouds != null) {
          let i = 0
          while(i < tagClouds.length){
            tagClouds[0].remove()
            i++
          } 
        }
      }, 1200)
    }
  }, [])

  return <div className={"tagcloud-container"} />
}

export default RotatingSphere;
