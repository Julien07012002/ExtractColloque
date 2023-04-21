         create user ADMCOLLOQUE
          identified by sqkJdP4nLubkfH7lFXlm
          default tablespace USERS
          temporary tablespace temp;

grant select on COLLOQUE.COLLOQUE to ADMCOLLOQUE;

grant select on GRHUM.PAYBOX to ADMCOLLOQUE;
grant select on GRHUM.INDIVIDU_ULR to COLLOQUE WITH GRANT OPTION;
grant select on GRHUM.COMPTE to COLLOQUE WITH GRANT OPTION;
grant select on COLLOQUE.RECAP_INSCRIPTIONS to ADMCOLLOQUE;


	grant create session to ADMCOLLOQUE;

 * 
   ALTER USER ADMCOLLOQUE QUOTA 10M ON USERS

 */