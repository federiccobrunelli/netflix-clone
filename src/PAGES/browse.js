import React, { useContext } from 'react';
import { BrowseContainer } from '../CONTAINERS/Browse';
import { useContent } from '../HOOKS';
import { selectionFilter } from '../UTILS/selection-filter'

export default function Browse() {
  
    const { series } = useContent('series');
    const { films } = useContent('films');
    const slides = selectionFilter({ series, films });


    return (
        <>
          <BrowseContainer slides={slides} />
        </>
    )
}