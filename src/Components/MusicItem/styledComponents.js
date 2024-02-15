import styled from 'styled-components'

export const MusicListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
`

export const TrackInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 500px;
`

export const MusicTrackImage = styled.img`
  width: 120px;
  height: 90px;
  margin-right: 10px;
`
export const NameGenreContainer = styled.div``

export const Name = styled.h1`
  font-family: 'Roboto';
  font-size: 18px;
  color: white;
  font-weight: bold;
`
export const Genre = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #3b82f6;
  font-weight: bold;
  line-height: 30px;
`
export const DurationDeleteContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Duration = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: white;
  font-weight: bold;
  margin-right: 20px;
`
export const DeleteButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
`
