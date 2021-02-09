import React, {useState} from 'react';
import { Link as ReactRouterLink } from 'react-router-dom';
import { Background, Container, Logo, ButtonLink, Feature, Text, FeatureTitle, Link, Group, Picture, Dropdown, Profile, Search, SearchIcon, SearchInput, PlayButton } from './styles/header';


export default function Header({ bg = true, children, ...restProps }) {
    return bg ? (
        <Background {...restProps}>
            {children}
        </Background>
    ) : children;
  }

Header.ButtonLink = function HeaderButtonLink({ children, ...restProps}) {
return <ButtonLink {...restProps}>{children}</ButtonLink>
}
  
Header.Container = function HeaderContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}

Header.Dropdown = function HeaderDropdown({children, ...restProps}) {
  return <Dropdown {...restProps}>{children}</Dropdown>
}

Header.Feature = function HeaderFeature({ children, ...restProps}) {
    return <Feature {...restProps}>{children}</Feature>
}

Header.FeatureText = function HeaderFeatureText({ children, ...restProps}) {
  return <Text {...restProps}>{children}</Text>
}

Header.FeatureTitle = function HeaderFeatureTitle({ children, ...restProps}) {
  return <FeatureTitle {...restProps}>{children}</FeatureTitle>
}

Header.Group = function HeaderGroup({ children, ...restProps }) {
  return <Group {...restProps}>{children}</Group>
}

Header.Logo = function HeaderLogo({ to, ...restProps }) {
  return (
    <ReactRouterLink to={to}>
        <Logo {...restProps} />
    </ReactRouterLink>
    );
  };

Header.Picture = function HeaderPicture({src, ...restProps}) {
  return <Picture src={`/images/users/${src}.png`} {...restProps} />
}

Header.PlayButton = function HeaderPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>
}

Header.Profile = function HeaderProfile({ children, ...restProps }) {
  return <Profile {...restProps}>{children}</Profile>
}

Header.Search = function HeaderSearch({ searchTerm, setSearchTerm, ...restProps}) {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <Search {...restProps}>
      <SearchIcon onClick={() => setSearchActive(searchActive => !searchActive)}>
        <img src="/images/icons/search.png" alt="Search Icon"/>
      </SearchIcon>
      <SearchInput 
        value={searchTerm} 
        onChange={({ target }) => setSearchTerm(target.value)} 
        placeholder="Search films and series" 
        active={searchActive} />
    </Search>
  )
}

Header.TextLink = function HeaderTextLink({ children, ...restProps}) {
  return <Link {...restProps}>{children}</Link>
}

