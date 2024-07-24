import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default async function handleProfileSignup(firstName, lastName, fileName) {
  const user = await signUpUser(firstName, lastName);
  let photo = null;
  try {
    photo = await uploadPhoto(fileName);
  } catch (err) {
    photo = `${err.name}: ${err.message}`;
  }
  const prom1 = { status: 'fulfilled', value: user };
  const prom2 = { status: 'rejected', value: photo };
  return [prom1, prom2];
}
