import InputDetail from 'components/InputDetail'
import {useState, ChangeEvent} from 'react'
import ButtonFooter from 'components/ButtonFooter'
import {FaUndo, FaRegSave} from 'react-icons/fa'
import {useNavigate, useParams, useSearchParams} from 'react-router-dom'
import {useHeroParams} from 'hooks/useHeroParams'

export default function HeroDetail() {
  const {id} = useParams()
  const {name, description} = useHeroParams()
  const navigate = useNavigate()
  const [hero, setHero] = useState({id, name, description})

  const handleCancel = () => navigate('/heroes')
  const updateHero = () => console.log('updateHero')
  const createHero = () => console.log('createHero')
  const handleSave = () => {
    console.log('handleSave')
    return hero.name ? updateHero() : createHero()
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('handleNameChange')
    setHero({...hero, name: e.target.value})
  }
  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log('handleDescriptionChange')
    setHero({...hero, description: e.target.value})
  }

  return (
    <div data-cy="hero-detail" className="card edit-detail">
      <header className="card-header">
        <p className="card-header-title">{hero.name}</p>
        &nbsp;
      </header>
      <div className="card-content">
        <div className="content">
          {id && (
            <InputDetail name={'id'} value={id} readOnly={true}></InputDetail>
          )}
          <InputDetail
            name={'name'}
            value={name ? name : ''}
            placeholder="e.g. Colleen"
            onChange={handleNameChange}
          ></InputDetail>
          <InputDetail
            name={'description'}
            value={description ? description : ''}
            placeholder="e.g. dance fight!"
            onChange={handleDescriptionChange}
          ></InputDetail>
        </div>
      </div>
      <footer className="card-footer">
        <ButtonFooter
          label="Cancel"
          IconClass={FaUndo}
          onClick={handleCancel}
        />
        <ButtonFooter label="Save" IconClass={FaRegSave} onClick={handleSave} />
      </footer>
    </div>
  )
}
