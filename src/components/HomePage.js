import React from 'react';
import HomeComponent from './HomeComponent';

export default function HomePage({
  history,
  match,
  location,
  users,
  images,
  logoImages,
  index,
  translateValue,
  autoplay,
  showDots,
  get_sliderImages,
  set_translateValue,
  set_index,
  coolButtons
}) {
  return (
    <div>
      <HomeComponent
        history={history}
        match={match}
        location={location}
        users={users}
        images={images}
        logoImages={logoImages}
        index={index}
        translateValue={translateValue}
        autoplay={autoplay}
        showDots={showDots}
        get_sliderImages={get_sliderImages}
        set_translateValue={set_translateValue}
        set_index={set_index}
        coolButtons={coolButtons}
      />
    </div>
  );
}
