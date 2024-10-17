-- Table: public.Books

CREATE TABLE IF NOT EXISTS public."Books"
(
    id integer NOT NULL DEFAULT nextval('"Books_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    rating double precision NOT NULL DEFAULT '0'::double precision,
    votes integer NOT NULL DEFAULT 0,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Books_pkey" PRIMARY KEY (id),
    CONSTRAINT "Books_name_key" UNIQUE (name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Books"
    OWNER to postgres;

-- Table: public.UserBooks

CREATE TABLE IF NOT EXISTS public."UserBooks"
(
    id integer NOT NULL DEFAULT nextval('"UserBooks_id_seq"'::regclass),
    "userId" integer,
    "bookId" integer,
    "borrowedDate" timestamp with time zone NOT NULL,
    "returnDate" timestamp with time zone,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "UserBooks_pkey" PRIMARY KEY (id),
    CONSTRAINT "UserBooks_bookId_fkey" FOREIGN KEY ("bookId")
        REFERENCES public."Books" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE,
    CONSTRAINT "UserBooks_userId_fkey" FOREIGN KEY ("userId")
        REFERENCES public."Users" (id) MATCH SIMPLE
        ON UPDATE CASCADE
        ON DELETE CASCADE
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."UserBooks"
    OWNER to postgres;

-- Table: public.Users

CREATE TABLE IF NOT EXISTS public."Users"
(
    id integer NOT NULL DEFAULT nextval('"Users_id_seq"'::regclass),
    name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    CONSTRAINT "Users_pkey" PRIMARY KEY (id),
    CONSTRAINT "Users_name_key" UNIQUE (name)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public."Users"
    OWNER to postgres;

