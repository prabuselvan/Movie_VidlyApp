import React from 'react';
import {getMovies} from '../services/fakeMovieService'
import Pagination from './common/pagination';
class Movies extends React.Component {

    state = {
        movies: getMovies(),
        pageSize: 3,
        currentPage:1,
        likeState: true
    }

    onDeleteMovie=(movie)=> {
        console.log(movie);
        const movies = this.state.movies.filter((m)=>m._id !== movie._id);
        console.log('After delete ', movies);

        this.setState( {
            movies 
        });
        
        // if (index !==-1) {
        //     deleteMovies.splice(index, 1);
        //     console.log('deleted movies are ', deleteMovies);
        //     // this.setState ( { movies : deletedmovies});
        // } 
    }

    handlePageChange=page=> {
        // console.log(page);
        this.setState( {currentPage:  page});
    }

    render() {
        const {length: count} = this.state.movies;
        const  {currentPage, pageSize}= this.state;
        if(count===0) return <p className="alert alert-danger"> No Movies in the database</p>
        return(
            <React.Fragment>
                    <h1> Movies</h1>
                    <p> Showing {count} movies in the database  </p>
                    
                   <table className="table">
                        <thead>
                            <tr>
                            <th scope="col"> Title </th>
                                <th scope="col"> Genre </th>
                                <th scope="col"> Stock</th>
                                <th scope="Rate"> Rate</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                        {/* <tr> */}
                        {/* <th scope="col"> 1</th> */}
                    {this.state.movies.map((movies, index)=> {
                        return (
                                  <tr key={movies._id}>
                                            <td>
                                                    {movies.title} 
                                            </td> 
                                            <td>
                                                    {movies.genre.name}
                                            </td>
                                            <td>
                                                    {movies.numberInStock}
                                            </td>
                                            <td>
                                                    {movies.dailyRentalRate}
                                            </td>
                                            <td>
                                              <i className="fa fa-heart" aria-hidden="true"
                                              onClick={()=> this.Like()}></i>      
                                            </td>
                                            <td>
                                                <button className="btn btn-danger btn-sm"
                                                        onClick={()=> this.onDeleteMovie(movies)}> Delete </button>
                                            </td>
                                    </tr>
                        
                        )
                            
                    })}
                     
                        {/* </tr> */}
                        </tbody>
                    </table>
                
    
               <Pagination 
                            itemsCount= {count}
                            pageSize={pageSize}
                            onPageChange={this.handlePageChange}
                            currentPage={currentPage}
                            />
            </React.Fragment>
        )
    }

    Like=(e)=> {
        let classes ="likecomp";
        const {likeState}= this.state;
         classes += likeState === false ? classes : ""
         this.setState({
             likeState:!likeState
         })
         console.log(classes);
         return classes;
    }

 
}

export default Movies;