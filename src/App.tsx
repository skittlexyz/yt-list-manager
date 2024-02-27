import './App.css'
import { ThemeProvider } from "@/components/theme-provider"
import VideoContainer from "@/components/video-container"
import Container from "@/components/container"
import Header from "@/components/header"
import Video from "@/components/video"

function App() {

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Container>
        <Header/>
        <VideoContainer>
          {/* make FOR loop to add videos */}
          <Video
            title="breakcore mix for the insane"
            url="https://www.youtube.com/watch?v=yuBsxV7c-ks&t=1959s"
            badges={["Music", "Breakcore", "DnB"]}
          />
        </VideoContainer>
      </Container>
    </ThemeProvider>
  )
}

export default App

