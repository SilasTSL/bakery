import React from 'react'
import { Introduction } from '../../components/about_us/Introduction'
import { Profile } from '../../components/about_us/Profile'

export const AboutUs = ({ data }) => {
    return (
        <div className="aboutUsContainer">
            <Introduction header={data.header} introductionSubtext={data.introductionSubtext} />
            <Profile name={data.name} profileDescription={data.profileDescription} />
        </div>
    )
}
