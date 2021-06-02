import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import useSearch from '../hooks/useSearch';
import { dataBase } from '../config/firebase';
const Search = () => {
  const searchString = 'מחשבים, מתקני ספורט , טיפול משפחתי, טיפול באומנות ועוד';
  const [newsFromSearch, setNewsFromSearch] = useState(null);
  const [departmentsFromSearch, setDepartmentsFromSearch] = useState(null);
  const sections = ['איתנים', 'כפר שאול', 'שירות קהילתי'];
  const [contentSec, setContentSec] = useState(null);
  var sectionsFromSearch = '';
  var secToAdd = [];
  var contentSecToAdd = [];

  sections.forEach((section) => {
    if (section.includes(searchString)) {
      if (section === 'כפר שאול') {
        sectionsFromSearch = section;
      } else if (section === 'איתנים') {
        sectionsFromSearch = section;
      } else {
        sectionsFromSearch = section;
      }
    }
  });

  useEffect(() => {
    dataBase
      .collection('News')
      .get()
      .then((news) => {
        const toAdd = [];
        news.docs.forEach((item) => {
          let data = item.data();
          let id = item.id;
          data = { ...data, id };
          if (data.NewsBody.includes(searchString)) {
            toAdd.push(data);
          } else if (data.NewsSubTitle.includes(searchString)) {
            toAdd.push(data);
          } else if (data.NewsTitle.includes(searchString)) {
            toAdd.push(data);
          }
        });
        setNewsFromSearch(toAdd);
      });
  }, []);

  useEffect(() => {
    const collectionRef = dataBase.collection('Departments');
    collectionRef.get().then((value) => {
      value.docs.forEach((doc) => {
        if (doc.id !== 'אחר') {
          doc.data().Deps.forEach((dep, index) => {
            if (dep.includes(searchString)) {
              let id = '';
              if (doc.id === 'כפר שאול') {
                id = 'kfarShaol';
              } else if (doc.id === 'איתנים') {
                id = 'Etanim';
              } else {
                id = 'sherotKhelate';
              }
              secToAdd = [
                ...secToAdd,
                ...[{ url: `${id}/${index}`, title: `${dep}/${doc.id}` }],
              ];
              setDepartmentsFromSearch(secToAdd);
            }
          });
        }
      });

      value.docs.forEach((doc) => {
        if (doc.id !== 'אחר') {
          doc.data().Deps.forEach((dep, index) => {
            var data = doc.data();
            if (data[dep] !== undefined) {
              if (data[dep].first && data[dep].first.includes(searchString)) {
                let id = '';
                if (doc.id === 'כפר שאול') {
                  id = 'kfarShaol';
                } else if (doc.id === 'אינתים') {
                  id = 'Etanim';
                } else {
                  id = 'sherotKhelate';
                }
                contentSecToAdd.push({
                  contentText: searchString,
                  url: `${id}/${index}`,
                });
                setContentSec(contentSecToAdd);
              }
            }
            if (data[dep] !== undefined) {
              if (data[dep].second && data[dep].second.includes(searchString)) {
                let id = '';
                if (doc.id === 'כפר שאול') {
                  id = 'kfarShaol';
                } else if (doc.id === 'אינתים') {
                  id = 'Etanim';
                } else {
                  id = 'sherotKhelate';
                }
                contentSecToAdd.push({
                  contentText: searchString,
                  url: `${id}/${index}`,
                });
                setContentSec(contentSecToAdd);
              }
            }
            if (data[dep] !== undefined) {
              if (data[dep].theird && data[dep].theird.includes(searchString)) {
                let id = '';
                if (doc.id === 'כפר שאול') {
                  id = 'kfarShaol';
                } else if (doc.id === 'אינתים') {
                  id = 'Etanim';
                } else {
                  id = 'sherotKhelate';
                }
                contentSecToAdd.push({
                  contentText: searchString,
                  url: `${id}/${index}`,
                });
                setContentSec(contentSecToAdd);
              }
            }
            if (data[dep] !== undefined) {
              if (data[dep].fourth && data[dep].fourth.includes(searchString)) {
                let id = '';
                if (doc.id === 'כפר שאול') {
                  id = 'kfarShaol';
                } else if (doc.id === 'אינתים') {
                  id = 'Etanim';
                } else {
                  id = 'sherotKhelate';
                }
                contentSecToAdd.push({
                  contentText: searchString,
                  url: `${id}/${index}`,
                });
                setContentSec(contentSecToAdd);
              }
            }
          });
        }
      });
    });
  }, []);

  console.log(departmentsFromSearch);
  console.log(contentSec);

  return (
    <div>
      <div className='NewsFormSearch'>
        {newsFromSearch &&
          newsFromSearch.map((newsItem) => {
            return (
              <Link to={`News/${newsItem.id}`} key={newsItem.id}>
                <div className='NewsItemfromSearch'>
                  <h1>{newsItem.NewsTitle}</h1>
                  <img src={newsItem.NewsImage} alt='img' />
                </div>
              </Link>
            );
          })}
      </div>

      <div className='SectionsFromSearch'>
        {sectionsFromSearch && (
          <div className='SectionFromSearch'>
            <h1>{sectionsFromSearch}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
