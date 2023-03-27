import toplane from '../../../images/toplane.webp'
import jungle from '../../../images/jungle.webp'
import midlane from '../../../images/midlane.webp'
import support from '../../../images/support.webp'
import adc from '../../../images/adc.webp'

const Role = ({formData, setFormData, page, setPage }) => {

    const handleRoleSelection = (role) => {
        setFormData({...formData, role: role})
        setPage(page + 1)
    }
    return (
        <div className="champions">
            <h1>Choisis le rôle</h1>
            <div className='champions__role'>
                <div className="champions__role--img" onClick={() => handleRoleSelection("toplane")}><img src={toplane} alt={"toplane"}/></div>
                <div className="champions__role--img" onClick={() => handleRoleSelection("jungle")}><img src={jungle} alt={"jungle"}/></div>
                <div className="champions__role--img" onClick={() => handleRoleSelection("midlane")}><img src={midlane} alt={"midlane"}/></div>
                <div className="champions__role--img" onClick={() => handleRoleSelection("support")}><img src={support} alt={"support"}/></div>
                <div className="champions__role--img" onClick={() => handleRoleSelection("adc")}><img src={adc} alt={"adc"}/></div>
            </div>
        </div>
    )
}

export default Role