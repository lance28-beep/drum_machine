import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Button from './Button'
import { selectLabel } from './features/counterSlice'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import { withStyles } from '@material-ui/core'
import { useDispatch } from 'react-redux'
import { toggleButton } from './features/toggleSlice'
import Social from './Social'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import GitHubIcon from '@material-ui/icons/GitHub'
import CodeIcon from '@material-ui/icons/Code'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import MailIcon from '@material-ui/icons/Mail'
import DvrIcon from '@material-ui/icons/Dvr'

function App() {
  const label = useSelector(selectLabel)
  const [toggle, settoggle] = useState(true)
  const dispatch = useDispatch(toggleButton)

  const socialMedia = [
    {
      icon: FacebookIcon,
      href: 'https://www.facebook.com/mr.c0oletz',
      site: 'Facebook',
    },
    {
      icon: TwitterIcon,
      href: 'https://twitter.com/valle_lance',
      site: 'Twitter',
    },
    {
      icon: GitHubIcon,
      href: 'https://github.com/lance28-beep',
      site: 'Github',
    },
    {
      icon: CodeIcon,
      href: 'https://codepen.io/lance28-beep',
      site: 'Codepen',
    },
    {
      icon: LinkedInIcon,
      href: 'https://www.linkedin.com/in/rolando-valle-43159b199',
      site: 'Linkedin',
    },
    {
      icon: MailIcon,
      href: 'vallelance8@gmail.com',
      site: 'Gmail',
    },
    {
      icon: DvrIcon,
      href: 'https://www.freecodecamp.org/vallelance',
      site: 'Freecodecamp',
    },
  ]

  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#0f24f9',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    )
  })

  const handleChange = (event) => {
    settoggle(!toggle)
    dispatch(toggleButton(toggle))
    console.log(toggle)
  }

  return (
    <div className='App'>
      <div className='container'>
        <div className='drum___container' id='heading'>
          <div className='label'>
            <h1>FCC: Drum Machine</h1>
            <p>freeCodeCamp.org</p>
            <a href='https://www.facebook.com/mr.c0oletz'>Visit my Facebook </a>
          </div>
          <div className='display__control'>
            <div className='control__toggle'>
              <FormControlLabel
                control={<IOSSwitch checked={toggle} onChange={handleChange} />}
                label='Try Other Sounds'
              />
            </div>
          </div>
        </div>
        <div className='drum___container'>
          <div className='button___sounds'>
            <Button />
          </div>
          <div className='display__others'>
            <div className='display area'>
              <h1 id='display'>{label}</h1>
              <div className='social__icons'>
                <span>Visit my:</span>
                {socialMedia.map((site) => (
                  <Social Icon={site.icon} href={site.href} site={site.site} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
