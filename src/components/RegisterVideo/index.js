import { useState } from "react";
import { StyledRegisterVideo } from "./styles";
import { createClient } from '@supabase/supabase-js'

function useForm(propsDoForm) {
  const [values, setValues] = useState(propsDoForm.initialValues)

  return {
    values,
    handleChange: (e) => {
      const value = e.target.value
      const name = e.target.name
      setValues({
        ...values,
        [name]: value
      })
    },
    clearForm() {
      setValues({})
    }
  }
}

//Pegando thumb pela url do vídeo YouTube
function getThumbnail(url) {
  return `https://img.youtube.com/vi/${url.split("v=")[1]}/hqdefault.jpg`
}

//Dados relacionados ao SUPABASE-JS
const PROJECT_URL = "https://jeviurmeefxigttitibo.supabase.co"
const PUBLIC_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Impldml1cm1lZWZ4aWd0dGl0aWJvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNjY0NDQsImV4cCI6MTk4Mzk0MjQ0NH0.7mFpn36PWwkApxd8NzpjvezPhznM5CLKb7uOZae8a-8"
const supabase = createClient(PROJECT_URL, PUBLIC_API_KEY)

export default function RegisterVideo(props) {
  const formCadastro = useForm({
    initialValues: { titulo: "", url: "" }
  })
  const [formVisivel, setFormVisivel] = useState(false)

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel
        ? (
          <form onSubmit={(e) => {
            e.preventDefault()

            supabase.from("video").insert({
              title: formCadastro.values.titulo,
              url: formCadastro.values.url,
              thumb: getThumbnail(formCadastro.values.url),
              playlist: "jogos"
            }).then((oqueveio) => {
              console.log(oqueveio)
            })
            .catch((err) => {
              console.log(err)
            })

            setFormVisivel(false)
            formCadastro.clearForm()
          }}>
            <div>
              <button type="button" className="close-modal" onClick={() => setFormVisivel(false)}> X </button>
              <input
                placeholder="Título do vídeo"
                name="titulo"
                value={formCadastro.values.titulo}
                onChange={formCadastro.handleChange} />
              <input
                placeholder="URL"
                name="url"
                value={formCadastro.values.url}
                onChange={formCadastro.handleChange} />
              <button type="submit">Cadastrar</button>
            </div>
          </form>
        ) : null}
    </StyledRegisterVideo>
  )
}