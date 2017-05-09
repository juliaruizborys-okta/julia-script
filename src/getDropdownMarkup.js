const getDropdownMarkup = (title, body) => {

    // TODO there's gotta be a better way
    const dropDownTemplate = 
        `<MadCap:dropDown>
            <MadCap:dropDownHead>
                <MadCap:dropDownHotspot>${title}</MadCap:dropDownHotspot>
            </MadCap:dropDownHead>
            <MadCap:dropDownBody>
                ${body}
            </MadCap:dropDownBody>
        </MadCap:dropDown>`

    return dropDownTemplate;
}

export default getDropdownMarkup;
